const {expect} = require('chai');

describe("Contract Token",function(){
it("Deployement should assign total supply to owner",async function(){
    //access account details balances or details,address of account
    const [owner]= await ethers.getSigners();

    console.log('Signers objects:',owner);
    //creating instance of the contract token
    const Token = await ethers.getContractFactory('Token');
//deploying the contract.
    const hardhatToken = await Token.deploy();
//checking owner address
    const ownerbalance= await hardhatToken.balancesOf(owner.address);//10000 balance
    console.log('Owner address: ',owner.address);
//checking if supply is equal to owner assigned supply expect is used from chai librarr.
    expect(await hardhatToken.supply()).to.equal(ownerbalance);

});
it("transfor tokens from one address to another",async function(){
    //access account details balances or details,address of account
    const [owner,address1,address2]= await ethers.getSigners();
    const Token = await ethers.getContractFactory('Token');
//deploying the contract.
    const hardhatToken = await Token.deploy();


//transfer 10 token from owner from address

await hardhatToken.transer(address1.address,10);
expect(await hardhatToken.balancesOf(address1.address)).to.equal(10);

//transfer 5 of 10 token to other
await hardhatToken.connect(address1).transer(address2.address,5);
expect (await hardhatToken.balancesOf(address2.address)).to.equal(5);
});

});