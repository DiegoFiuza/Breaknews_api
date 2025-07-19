const soma = (req,res) => {
    const soma = 100 + 1;
//enviando com send
    res.send({soma: soma});
};

module.exports = {soma};