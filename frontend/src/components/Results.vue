<template>
    <div class="table-container">
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Annuity (Borrower Payment Amount)</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Initial Outstanding Principal</th>
                <th>Remaining Outstanding Principal</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in postResult">
                    <td>{{ item.date }}</td>
                    <td>{{ item.borrowerPaymentAmount }}</td>
                    <td>{{ item.principal }}</td>
                    <td>{{ item.interest }}</td>
                    <td>{{ item.initialOutstandingPrincipal }}</td>
                    <td>{{ item.remainingOutstandingPrincipal }}</td>
                </tr>
            </tbody>
        </table>
        <router-link :to="{name: 'RepayForm'}">Back to form</router-link>
    </div>
</template>

<script>
    export default {
      name: 'Results',
      props: ['postResult']
    }
</script>

<style scoped>
    .table-container{
        margin-left: 10%;
    }

    table{
        border-collapse: collapse;
    }


    td, th {overflow:hidden;
        white-space:nowrap;
        border: 1px solid;
        padding: 1%;
        }


</style>