import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Api } from '../../app/api';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

	items = [];
	token: string;
	serverData: Observable<any>;
  baseURL: string = 'http://0.0.0.0:4000/api';
  systemID: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public api: Api) {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loading.present();

    this.systemID = this.navParams.get('systemID');
    if (this.systemID == null) {
      this.systemID = 1;
      console.log('No SystemID passed, using default test value 1!');
    }

    /* Initialize our System Detail strings */
    this.items.push('<b>Company Name:</b> ', //0
    '<b>System Name:</b> ',             //1
    '<b>Serial Number:</b> ',           //2
    '<b>Product Family:</b> ',          //3
    '<b>Model:</b> ',                   //4
    '<b>OS Version:</b> ',              //5
    '<b>CPG Count:</b> ',               //6
    '<b>Recommended OS:</b> ',          //7
    '<b>Region:</b> ',                  //8
    '<b>Country:</b> ',                 //9
    '<b>Install Date:</b> ',            //10
    '<b>Last Updated:</b> ',            //11
    '<b>Node Count:</b> ',              //12
    '<b>Offline Nodes:</b> ',           //13
    '<b>Total Disks:</b> ',             //14
    '<b>Normal Disks:</b> ',            //15
    '<b>Degraded Disks:</b> ',          //16
    '<b>Failed Disks:</b> ',            //17
    '<b>Disks State:</b> ',             //18
    '<b>Virtual Volumes:</b> ',         //19
    '<b>Thinly Provisioned Virtual Volumes:</b> ',  //20
    '<b>Free Storage (Percent):</b> ',  //21
    '<b>Free Storage (TiB):</b> ',      //22
    '<b>Free Fibre Storage:</b> ',      //23
    '<b>Free NearLine Storage:</b> ',   //24
    '<b>Free SSD Storage:</b> ',        //25
    '<b>Total Capacity:</b> ',          //26
    '<b>Total Fibre Capacity:</b> ',    //27
    '<b>Total NearLine Capacity:</b> ', //28
    '<b>Total SSD Capacity:</b> ',      //29
    '<b>Compaction Ratio:</b> ',        //30
    '<b>Compression Ratio:</b> ',       //31
    '<b>Deduplication Ratio:</b> ',     //32
    '<b>Avg Bandwidth:</b> ',           //33
    '<b>Avg IOPS:</b> ',                //34
    '<b>Max IOPS:</b> ',                //35
    '<b>Avg Service Time:</b> ',        //36
    '<b>Avg Read Time:</b> ',           //37
    '<b>Avg Write Time:</b> ',          //38
    '<b>Avg Delayed ACKs:</b> ',        //39
    '<b>SSD Avg Read:</b> ',            //40
    '<b>SSD Avg Write:</b> ',           //41
    '<b>SSD Avg Read Time:</b> ',       //42
    '<b>SSD Avg Write Time:</b> ',      //43
    '<b>CPU Max Daily Usage:</b>'       //44
    );

  	//this.token = this.api.getToken(); // Add this when merged!

    /* vRemove this when merged!v */
  	this.token = 'SFMyNTY.g3QAAAACZAAEZGF0YWEBZAAGc2lnbmVkbgYAgcUxFGAB.9Z5BlBUfaVhim-A0Ky6Hx_7Mc5T0C7vZSoVIlgpK-Bo'
    /* ^Remove this when merged!^ */

  	if (this.token == null) {
  		loading.dismiss();
  		alert("Not logged in!");
  	} else {
	    this.http.get(this.baseURL + '/systems/' + this.systemID + '?token=' + this.token)
	      .subscribe(
	        function(result) {
	        	console.log(result.json());
	        },
	        function(error) {
	          loading.dismiss();
	          console.log(error);
	        },
	        function() {
	          loading.dismiss();
	      	}
	      );
    }
  }
}
