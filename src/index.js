module.exports = function getZerosCount(number, base) {

    const maximum_power_p = (p, number) => {
        let mu = 0;
        while (number / p > 0) {
            mu += Math.trunc(number / p);
            number = Math.trunc(number / p);
        }
        return mu;
    };

    const maximum_power_pr = (p, pow, number) => {
        return Math.trunc(maximum_power_p(p, number) / pow);
    };

    const factorize = (outcome = number) => {
        for (let p = 2; p <= base; p++) {
            if (base % p === 0) {
                let pow = 0;
                while (base % p === 0) {
                    pow++;
                    base /= p;
                }
                outcome = Math.min(outcome, maximum_power_pr(p, pow, number));
            }
        }
        return outcome;
    };

    return factorize(number)
};
