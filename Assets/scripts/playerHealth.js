 #pragma strict

static var healthplayer : int;

function Start () 
{
       DontDestroyOnLoad(this);
       healthplayer=20;        
}

function OnGUI()
{
        //display score         
        GUI.Box(new Rect(300, 20, 120, 30), "Player Health: " + healthplayer);
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


