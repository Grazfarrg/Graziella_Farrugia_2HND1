#pragma strict

//when clicked, health increases
function OnMouseDown()
{
       //increment health
       scoreController.score++;
       this.renderer.enabled = false;
}

function Start () 
{
       
}

function Update () 
{
  
}