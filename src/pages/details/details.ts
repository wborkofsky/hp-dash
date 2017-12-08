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
  data: any;
  systemName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public api: Api) {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loading.present();

    this.systemID = this.navParams.get('systemID');
    if (this.systemID == null) {
      this.systemID = 171;
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

  	this.token = this.api.getToken(); // Add this when merged!

    /* vRemove this when merged!v */
  	//this.token = 'SFMyNTY.g3QAAAACZAAEZGF0YWEBZAAGc2lnbmVkbgYAgcUxFGAB.9Z5BlBUfaVhim-A0Ky6Hx_7Mc5T0C7vZSoVIlgpK-Bo'
    /* ^Remove this when merged!^ */

  	if (this.token == null) {
  		loading.dismiss();
  		alert("Not logged in!");
  	} else {
	    this.api.showSystem(this.systemID, (data) => this.fillFields(data));
	    loading.dismiss();
    }
  }

  fillFields(data: any) {
  	if (data == null) {
  		alert('No data!');
  		return;
  	}
  	console.log(data);
 		this.items[0] += data['companyName'];
 		this.items[1] += data['systemName'];
 		this.items[2] += data['serialNumber'];
 		this.items[3] += data['productFamily'];
 		this.items[4] += data['model'];
 		this.items[5] += data['osVersion'];
 		this.items[6] += data['cpgCount'];
 		(data['Recommended_osVersion'] == null) 
 			? this.items[7] += 'N/A' 
 			: this.items[7] += data['Recommended_osVersion'];
 		(data['location_region'] == 0)
 			? this.items[8] += 'N/A'
 			: this.items[8] += data['location_region'];
 		(data['location_country'] == 0)
 			? this.items[9] += 'N/A'
 			: this.items[9] += data['location_country'];
 		this.items[10] += data['installDate'];
 		(data['updated'] == 0)
 			? this.items[11] += 'N/A'
 			: this.items[11] += data['updated'];
 		(data['nodes_nodeCount'] == 0)
 			? this.items[12] += 'N/A'
 			: this.items[12] += data['nodes_nodeCount'];
 		(data['nodes_nodeCountOffline'] == 0)
 			? this.items[13] += 'N/A'
 			: this.items[13] += data['nodes_nodeCountOffline'];
 			(data['disk_total_diskCount'] == 0)
 			? this.items[14] += 'N/A'
 			: this.items[14] += data['disks_total_diskCount'];
 		(data['disks_total_diskCountNormal'] == 0)
 			? this.items[15] += 'N/A'
 			: this.items[15] += data['disks_total_diskCountNormal'];
 		(data['disks_total_diskCountDegraded'] == 0)
 			? this.items[16] += 'N/A'
 			: this.items[16] += data['disks_total_diskCountDegraded'];
 		(data['disks_total_diskCountFailed'] == 0)
 			? this.items[17] += 'N/A'
 			: this.items[17] += data['disks_total_diskCountFailed'];
 		this.items[18] += data['disksState'];
 		this.items[19] += data['vvCount'];
 		(data['tpvvCount'] == 0)
 			? this.items[20] += 'N/A'
 			: this.items[20] += data['tpvvCount'];
 		(data['capacity_total_freePct'] == 0)
 			? this.items[21] += 'N/A'
 			: this.items[21] += data['capacity_total_freePct'].toFixed(2) + '%';
 		(data['capacity_total_freeTiB'] == 0)
 			? this.items[22] += 'N/A'
 			: this.items[22] += data['capacity_total_freeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_fc_freeTiB'] == 0)
 			? this.items[23] += 'N/A'
 			: this.items[23] += data['capacity_byType_fc_freeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_nl_freeTiB'] == 0)
 			? this.items[24] += 'N/A'
 			: this.items[24] += data['capacity_byType_nl_freeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_ssd_freeTiB'] == 0)
 			? this.items[25] += 'N/A'
 			: this.items[25] += data['capacity_byType_ssd_freeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_total_sizeTiB'] == 0)
 			? this.items[26] += 'N/A'
 			: this.items[26] += data['capacity_total_sizeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_fc_sizeTiB'] == 0)
 			? this.items[27] += 'N/A'
 			: this.items[27] += data['capacity_byType_fc_sizeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_nl_sizeTiB'] == 0)
 			? this.items[28] += 'N/A'
 			: this.items[28] += data['capacity_byType_nl_sizeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_byType_ssd_sizeTiB'] == 0)
 			? this.items[29] += 'N/A'
 			: this.items[29] += data['capacity_byType_ssd_sizeTiB'].toFixed(2) + ' TiB';
 		(data['capacity_total_compactionRatio'] == 0)
 			? this.items[30] += 'N/A'
 			: this.items[30] += data['capacity_total_compactionRatio'].toFixed(2);
 		(data['capacity_total_compressionRatio'] == 0)
 			? this.items[31] += 'N/A'
 			: this.items[31] += data['capacity_total_compressionRatio'].toFixed(2);
 		(data['capacity_total_dedupeRatio'] == 0)
 			? this.items[32] += 'N/A'
 			: this.items[32] += data['capacity_total_dedupeRatio'].toFixed(2);
 		(data['performance_portBandwidthData_total_dataRateKBPSAvg'] == 0)
 			? this.items[33] += 'N/A'
 			: this.items[33] += data['performance_portBandwidthData_total_dataRateKBPSAvg'].toFixed(2)
 					+ ' KB/s';
 		(data['performance_portBandwidthData_total_iopsAvg'] == 0)
 			? this.items[34] += 'N/A'
 			: this.items[34] += data['performance_portBandwidthData_total_iopsAvg'].toFixed(2) 
 					+ ' IOPS';
 		(data['performance_portBandwidthData_total_iopsMax'] == 0)
 			? this.items[35] += 'N/A'
 			: this.items[35] += data['performance_portBandwidthData_total_iopsMax'].toFixed(2)
 					+ ' IOPS';
 		(data['performance_summary_portInfo_totalServiceTimeMillis'] == 0)
 			? this.items[36] += 'N/A'
 			: this.items[36] += data['performance_summary_portInfo_totalServiceTimeMillis'].toFixed(2)
 					+ ' ms';
 		(data['performance_summary_portInfo_readServiceTimeMillis'] == 0)
 			? this.items[37] += 'N/A'
 			: this.items[37] += data['performance_summary_portInfo_readServiceTimeMillis'].toFixed(2)
 					+ ' ms';
 		(data['performance_summary_portInfo_writeServiceTimeMillis'] == 0)
 			? this.items[38] += 'N/A'
 			: this.items[38] += data['performance_summary_portInfo_writeServiceTimeMillis'].toFixed(2)
 					+ ' ms';
 		(data['performance_summary_delAckPct'] == 0)
 			? this.items[39] += 'N/A'
 			: this.items[39] += data['performance_summary_delAckPct'].toFixed(2) + '%';
 		(data['performance_summary_vvInfo_vvsByType_ssd_readBandwidthMBPS'] == 0)
 			? this.items[40] += 'N/A'
 			: this.items[40] += data['performance_summary_vvInfo_vvsByType_ssd_readBandwidthMBPS'].toFixed(2)
 					+ ' MB/s';
 		(data['performance_summary_vvInfo_vvsByType_ssd_writeBandwidthMBPS'] == 0)
 			? this.items[41] += 'N/A'
 			: this.items[41] += data['performance_summary_vvInfo_vvsByType_ssd_writeBandwidthMBPS'].toFixed(2)
 					+ ' MB/s';
 		(data['performance_summary_vvInfo_vvsByType_ssd_readServiceTimeMillis'] == 0)
 			? this.items[42] += 'N/A'
 			: this.items[42] += data['performance_summary_vvInfo_vvsByType_ssd_readServiceTimeMillis'].toFixed(2)
 					+ ' ms';
 		(data['performance_summary_vvInfo_vvsByType_ssd_writeServiceTimeMillis'] == 0)
 			? this.items[43] += 'N/A'
 			: this.items[43] += data['performance_summary_vvInfo_vvsByType_ssd_writeServiceTimeMillis'].toFixed(2)
 					+ ' ms';
 		(data['nodes_cpuAvgMax'] == 0)
 			? this.items[44] += 'N/A'
 			: this.items[44] += data['nodes_cpuAvgMax'] + '%';
  }
}
