const getAge =(birthdate)=> {
    if(birthdate===null) return '-';
    return Math.round(Math.abs(new Date(birthdate) - new Date()) * 3.16887385E-11);
}

module.exports = getAge;