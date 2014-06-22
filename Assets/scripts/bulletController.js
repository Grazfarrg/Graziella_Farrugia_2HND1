#pragma strict

var x:int;
var y:int;

x= Screen.width/2;
y = Screen.height/2;

function Start () 
{

}

function Update () 
{
 transform.Translate(Vector3.right*15*Time.deltaTime);
}