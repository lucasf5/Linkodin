const getAge =(birthdate)=>{
    const diffTime = Math.abs(new Date(birthdate) - new Date());
    const age = Math.round(Math.abs(new Date(birthdate) - new Date()) * 3.16887385E-11);
}