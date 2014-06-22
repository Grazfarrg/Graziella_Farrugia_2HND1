 #pragma strict

static var healthalien: int;

function Start () 
{
       DontDestroyOnLoad(this);
       healthalien=50;        
}

function OnGUI()
{
        //display score         
        GUI.Box(new Rect(650, 20, 120, 30), "Alien Health: " + healthalien);
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