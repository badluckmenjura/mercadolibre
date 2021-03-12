export const toNumber = (number) => {
    if(typeof number == "string" && isNaN(number)){
      return number;
    }else {
      number = (parseFloat(number) + '').split('.')[0]
      return number.replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.')
    }
  }