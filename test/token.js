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
});