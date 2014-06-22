#pragma strict

function Start () {

}

function Update ()
{
//when health alien reaches zero, you win
       if(alienHealth.healthalien <= 0)
       {
               alienHealth.healthalien = 0;
               Destroy(this.gameObject);
               
               Application.LoadLevel(5);
       }
       
       //when player health reaches zero, gameover
   if(playerHealth.healthplayer <= 0)
       {
               playerHealth.healthplayer = 0;
               Destroy(this.gameObject);                
               
               Application.LoadLevel(6);
       }




}


