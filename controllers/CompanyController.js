module.exports = {
    async create(ctx) {
        try{
            ctx.body = 'CompanyController create';
        }catch(err){
            ctx.throw(500, err);
        }
    }
};