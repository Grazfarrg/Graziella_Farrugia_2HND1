#pragma strict

//when clicked, health increases
function OnMouseDown()
{
       //increment health
       playerHealth.healthplayer++;
       this.renderer.enabled = false;
}

function Start () 
{
       
}

function Update () 
{
  
}