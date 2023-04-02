// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

contract Game
{
    uint timeBeginning = block.timestamp;
    uint timeNow;
    uint elapsedTime;

    address top1;
    address top2;
    address top3;

    bool gaveAwards = true;

    uint lastContractBalance = address(this).balance;

    mapping(address => uint) public addressToPoints;

    //mapping(address => bool) public alreadyPlayed;

    address[10] private leaderboard;

    function pay(uint points) public payable
    {
        //require(alreadyPlayed[msg.sender] == false, "You already played today.");
        require(gaveAwards, "Wait for last day awards to be given.");
        
        addressToPoints[msg.sender] = points;
        //alreadyPlayed[msg.sender] = true;

        if(addressToPoints[msg.sender] >= addressToPoints[leaderboard[9]])
        {
            for(uint j = 0; j < 9; j ++)
            {
                addressToPoints[leaderboard[j]] = addressToPoints[leaderboard[j + 1]];
            }
            leaderboard[9] = msg.sender;
        }

        else
        {
            for(uint i = 0; i < 10; i ++)
            {
                if(i > 0 && addressToPoints[msg.sender] < addressToPoints[leaderboard[i]])
                {
                    for(uint j = 0; j < i - 1; j ++)
                    {
                        leaderboard[j] = leaderboard[j + 1];
                    }
                    leaderboard[i - 1] = msg.sender;
                    break;
                }
            }
        }

        timeNow = block.timestamp;
        elapsedTime = timeNow - timeBeginning;

        if(elapsedTime > 180)
        {
            gaveAwards = false;
        }
        else
        {
            lastContractBalance = address(this).balance;
            top1 = leaderboard[9];
            top2 = leaderboard[8];
            top3 = leaderboard[7];
        }
    }

    function award() public payable
    {
        require(elapsedTime > 180, "Awards can't be given yet");

        uint top1Prize = lastContractBalance / 2;
        (bool sent1, bytes memory data1) = top1.call{value : top1Prize} ("");
        require(sent1 && top1 != address(0), "Error sending prize");

        uint top2Prize = lastContractBalance * 3 / 10;
        (bool sent2, bytes memory data2) = top2.call{value : top2Prize} ("");
        require(sent2 && top2 != address(0), "Error sending prize");
    
        uint top3Prize = lastContractBalance * 2 / 10;
        (bool sent3, bytes memory data3) = top3.call{value : top3Prize} ("");
        require(sent3 && top3 != address(0), "Error sending prize");
        
        for(uint i = 0; i <= 9; i ++)
        {
            leaderboard[i] = address(0);
        }
        timeBeginning = block.timestamp;
        gaveAwards = true;
    }

    function seeLeaderboard(uint index) public view returns(address)
    {
        return leaderboard[index];
    }

    function seeBlockElapsedTime() public view returns(uint)
    {
        return block.timestamp - timeBeginning;
    }
}