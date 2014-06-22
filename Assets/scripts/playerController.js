#pragma strict

var gun:Rigidbody;

function Start () {

}

//when the player gets hit
function OnTriggerEnter(other:Collider)
{
       if(other.gameObject.tag == "enemy")
       {
               //decrement health of player
               playerHealth.healthplayer-=2;        
                       
       }
}


 function Update () 
{        
       //vertical movement with mouse          
    transform.position.y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
   
   //restric values on borders
   transform.position.x = Mathf.Clamp(transform.position.x, -6, 6);
   transform.position.y = Mathf.Clamp(transform.position.y, -4, 4);
   
   if(Input.GetKeyDown(KeyCode.LeftAlt))
              {
               Instantiate(gun,Vector3(transform.position.x+1.5,transform.position.y,-1), Quaternion.identity);
               }
               
                                                    
}