 #pragma strict



var leftborder:float=-5;
var rightborder:float=5;
var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;



function Start () {


}


function Update () 
{        
       if (transform.position.x > rightborder)
       {
               touchedrightwall=true;
       }
       
       if (transform.position.x < leftborder)
       {
               touchedleftwall = true;
       }
       
       if (touchedrightwall == false)
       {                
               touchedleftwall = false;
               transform.Translate(Vector3.right * 5 * Time.deltaTime);
       }
       
       if (touchedrightwall == true)
       {
               transform.Translate(Vector3.left * 5 * Time.deltaTime);
       }
               
       if (touchedleftwall == true)
       {
               touchedrightwall = false;
               transform.Translate(Vector3.right * 5 * Time.deltaTime);
       }

}


//when the enemy gets hit
function OnTriggerEnter(other:Collider)
{
       if(other.gameObject.tag == "bullet")
       {        
               Debug.Log("hit");
               //decrement health of boss
               alienHealth.healthalien-=2;
       }
}
