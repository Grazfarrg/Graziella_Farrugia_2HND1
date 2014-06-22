#pragma strict

static var score: int;

function Start () 
{
       DontDestroyOnLoad(this);
       score=0;        
}

function OnGUI()
{
        //display score         
        GUI.Box(new Rect(150, 20, 120, 30), "Score: " + score);
}

function OnLevelWasLoaded (level : int) 
{
       if (level == 6) 
       {
               Destroy(this.gameObject);
       }
       
                     if (level == 5) 
       {
               Destroy(this.gameObject);
       }
}