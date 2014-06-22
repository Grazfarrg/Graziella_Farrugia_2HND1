#pragma strict

var timer: float = 20.0;

function Start () 
{

}

function Update () 
{
       timer -= Time.deltaTime; //set timer to count down
       
       if (timer <= 0)
       {
               timer = 0;
               //when timer reaches zero, gameover
               Application.LoadLevel(6);                
       }
}

function OnGUI()
{
       GUI.Box(new Rect(500, 20, 120, 30), "Time:" + timer.ToString("0"));
}