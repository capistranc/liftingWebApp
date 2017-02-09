/**
 * Created by chris on 2/8/17.
 */
export const formulaC = (weight, reps) => { //BryzckiMax: Conservative
    weight = parseInt(weight,10);
    reps = parseInt(reps,10);
    var max = weight / (1.0278 - (0.0278*reps));

    return parseInt(max, 10);
};

export const formulaB = (weight, reps) => { //LanderMax: MiddleGround
    weight = parseInt(weight, 10);
    reps = parseInt(reps, 10);

    var max = weight / (1.013 - (0.267123 * reps));
    return parseInt(max, 10);
};


 export const formulaA= (weight, reps) => { //EpleyMax: Ambitious
    weight = parseInt(weight, 10);
    reps = parseInt(reps, 10);
    var max = weight*reps*.033 + weight;

    return parseInt(max, 10);
};