package com.codeoftheweb.backend;

import org.h2.util.DateTimeUtils;

import java.time.LocalDate;
import java.util.*;

public class Annuity {


    private double loanAmount;
    private double nominalIR;
    private int duration;
    private Date startDate;
    private double annuity;
    private ArrayList<Object> repayPlan = new ArrayList<>();

    public Annuity(double loanAmount, double nominalIR, int duration, Date startDate) {

       this.loanAmount = loanAmount;
       this.nominalIR = nominalIR;
       this.duration = duration;
       this.startDate = startDate;
       setAnnuity();
    }



    public void setAnnuity() {
    // Divide the annual rate by 12 to get the monthly rate and by 100 to get the percentage in decimals
        double ratePerPeriod = this.nominalIR/1200;
        double annuityResult = this.loanAmount * (ratePerPeriod)/(1 - Math.pow(1 + ratePerPeriod, -this.duration));
        this.annuity = Math.round(annuityResult * 100.0) / 100.0;
    }

    public double getAnnuity() {
        return annuity;
    }

    public int getDuration() {
        return duration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setRepayPlan(){
        double calcAnnuity = this.annuity;
        Date payDay = this.startDate;
        double outsPrinc = this.loanAmount;
        double interest;
        double principal;
        double remainPrinc;
        Calendar myCal = Calendar.getInstance();
        myCal.setTime(payDay);

        for (int i=0; i < this.duration; i++) {
            myCal.add(Calendar.MONTH, + i);
            payDay = myCal.getTime();
            interest = ((this.nominalIR * 30 * outsPrinc) / 360) / 100;
            principal = calcAnnuity - interest > outsPrinc? outsPrinc: calcAnnuity - interest;
            calcAnnuity = calcAnnuity - interest > outsPrinc? principal + interest: calcAnnuity;
            remainPrinc = outsPrinc - principal;
            this.repayPlan.add(generateInstallment(calcAnnuity,payDay,outsPrinc,interest,principal,remainPrinc));
            outsPrinc = remainPrinc;
        }


    }

    public LinkedHashMap<String,Object> generateInstallment(double inputAnnuity
            , Date inputdate, double inpInitPrinc, double inpInt, double inpPrinc, double inpOutsPrinc){
        LinkedHashMap<String,Object> installment = new LinkedHashMap<>();
        installment.put("borrowerPaymentAmount", Math.round(inputAnnuity * 100.0) / 100.0);
        installment.put("date", inputdate);
        installment.put("initialOutstandingPrincipal", Math.round(inpInitPrinc * 100) / 100.0);
        installment.put("interest", Math.round(inpInt * 100.0) / 100.0);
        installment.put("principal", Math.round(inpPrinc * 100.0) / 100.0);
        installment.put("remainingOutstandingPrincipal", Math.round(inpOutsPrinc * 100.0) / 100.0);
        return installment;
    }

    public ArrayList<Object> getRepayPlan() {
        return repayPlan;
    }
}
