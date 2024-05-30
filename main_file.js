const Wallet = [];  //Object storing the NFTs

//Function to mint the NFT onto Wallet[] 
function mintNFTs(name, opening, closing, bids){   

    const SmallWallet = {  //Object OF NFTs containing metadata of single NFT
        "name": name,  //Name of currency (string)
        "opening": opening,  //Opening price of currency  (int)
        "closing": closing,  //Closing price of currency (int)
        "bids": bids,  //Different bids (array of int)
    }

    Wallet.push(SmallWallet);  //Push object onto Wallet
    console.log("Minted " + name);  //Confirm minting
}

//Print the NFT metadata
function listNFTs(){  
    for(var i=0; i<Wallet.length; i++){
        console.log("\nID: " + (i+1));
        console.log("Name: " + Wallet[i].name);
        console.log("Opening: " + Wallet[i].opening);
        console.log("Closing: " + Wallet[i].closing);
        console.log("Bids: ");
        
        for(var j=0;j<Wallet[i].bids.length;j++){  //Inner for loop for printing different bids for 1 currency
            console.log("  Bid" + (j+1) + ": " + Wallet[i].bids[j]);
        }
    }
}

//Derive the total number of NFTs in our Wallet
function getTotalNFTs(){  
    const len = Wallet.length;
    console.log("\nTotal NFTs: " + len);
}

//Execution
mintNFTs("BTC", 15000 , 22000, [15000, 17000, 22000]);  //Add Bitcoin
mintNFTs("ETH", 19000 , 24000, [16000, 17000, 24000]);  //Add Ethereum
mintNFTs("ADA", 20000 , 25000, [11000, 11000, 25000]);  //Add Ada

mintNFTs("DOGE", 22000 , 26000, [16000, 17000, 26000]);  //Add Dogecoin

listNFTs();  //Print the Wallet (minted NFTs)
getTotalNFTs();  //Print length of Wallet

//Note that these comments aren't in my explanation video, as there I have explained THE CODE MYSELF. However when storing the code its important to DOCUMENT. Hence I have included explanatory comments here. (I had made the video before including the comments)
