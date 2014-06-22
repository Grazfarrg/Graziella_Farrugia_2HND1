#pragma strict

function Start () {

}

function Update () 
{

	if (scoreController.score == 2) 
       {
          Application.LoadLevel(3);
       }
}