class Mkulima{
    constructor(){
    this.farms = [];
    this.Groceryvendors = [];
    this.product = [];
    this.addFarms = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarms = (farmId) => {
    let specific = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specific);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarms = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarms = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})

    }
    this.removeFarms = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIdx = this.product.indexOf(specific);
    this.product.splice(productIdx,1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    let farm1 = new Mkulima();
    farm1.addFarms("200","Kasozi","Getrude","+256777294373", "NJ 394");
    farm1.addFarms("400","Wakiso","Clare","+256729478394", "IY 444");
    farm1.addFarms("976","Kyengera","Mathias","+256777847338", "BUDDO 102");
    console.log(farm1.farms);

    farm1.removeFarms("400");
    console.log() 