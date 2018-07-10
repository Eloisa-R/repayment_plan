package com.codeoftheweb.backend;

import java.util.Date;

public class Annuity {


    private double loanAmount;
    private double nominalIR;
    private int duration;
    private Date startDate;
    private double annuity;

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
}
