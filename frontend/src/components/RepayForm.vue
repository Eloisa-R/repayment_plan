

<template>

    
    <button v-on:click="calcPay">Test form</button>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'RepayForm',
        methods: {
            calcPay: function(){
                let planData = {'loanAmount': '5000',
                    'nominalRate': '5.0',
                    'duration': '24',
                    'startDate': new Date().toISOString()}
                const body = JSON.stringify(planData);
                fetch('http://localhost:8080/generate-plan',
                    {
                        method: 'POST',
                        body: body,
                        mode: 'cors',
                        headers: {
                            'Accept': '*/*',
                            'Content-type': 'application/json; charset=UTF-8',
                            'X-Requested-With': 'XMLHttpRequest',
                        }
                    })
                    .then(response =>  {if (response.ok) {
                        console.log(response)
                        return response.data;
                    } else {
                        throw new Error('Something went wrong, request failed with status ' + response.status);
                    }
                    })
                    .then((data) => {

                    })
                    .catch(error => {console.log(error)});

            }
        }
    }
</script>

<style scoped>

</style>