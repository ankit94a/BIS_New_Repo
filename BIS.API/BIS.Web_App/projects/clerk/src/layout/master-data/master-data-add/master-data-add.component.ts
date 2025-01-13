import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BISDialogTitleComponent } from 'projects/sharedlibrary/src/component/edusynk-dialog-title/edusynk-dialog-title.component';
import { ImasterData } from 'projects/sharedlibrary/src/model/masterdata.model';
import { ApiService } from 'projects/sharedlibrary/src/services/api.service';
import { SharedLibraryModule } from 'projects/sharedlibrary/src/shared-library.module';

@Component({
  selector: 'app-master-data-add',
  imports: [SharedLibraryModule],
  templateUrl: './master-data-add.component.html',
  styleUrl: './master-data-add.component.scss'
})
export class MasterDataAddComponent implements OnInit {
  masterData;
  isEdit = false;
  fmnList: string[] = ["33 Corps", "27 Mtn Div", "17 Mtn Div", "111 Sub Area", "20 Mtn Div", "3 Corps", "2 Mtn Div", "56 Mtn Div", "57 Mtn Div", "4 Corps", "5 Mtn Div", "21 Mtn Div", "71 Mtn Div", "17 Corps", "59 Mtn Div", "23 Mtn Div"];
  dropdownItems: any[] = []; 
  sectorList = [];
  formBuilder = inject(FormBuilder);
  toastr = inject(ToastrService);
  selectedValue: string = '';  // To hold the selected value from the dropdown
  sectordropdownItems: any[] = [];
  sourcedropdownItems: any[] = [];
  enLocdropdownItems: any[] = [];
  sourceLocdropdownItems: any[] = [];
  typeOfLocdropdownItems: any[] = [];
  selected = 'any';
  selectedType = 'Svl / Counter Svl';
  subselectedType = 'any';
  subselected = 'Svl / Counter Svl';
  constructor(private apiService:ApiService){

  }
  ngOnInit(): void {
   this.masterData = this.formBuilder.group({
      reportedDate: ['', Validators.required],
      masterInputlevelID:[0],
      masterSectorID:[0],
      // inputLevelNew: [0],
      // sectorNew :[0],
      name: ['', Validators.required],
      sector: ['', Validators.required],
      fmn: [0, Validators.required],
      source: ['', Validators.required],
      sourceLoc: [''],
      typeOfLoc: ['', Validators.required],
      enLocName: ['', Validators.required],
      aspect: [''],
      indicator: [''],
      typeSvlEqpt: [''],
      noSvlEqpt: [''],
      poaseReamrks: [''],
      irRemarks: [''],
      iolRemarks: [''],
      htM: [''],
      tgt: [''],
      visSrOffrs: [''],
      ptls: [''],
      newTps: [''],
      cvys: [''],
      obsn: [''],
      type: [''],
      timeFrom: [''],
      timeTo: [''],
      jammingEqpt: [''],
      jammingTimefrom: [''],
      jammingTimeto: [''],
      jammingDtOfJx: [''],
      jammingEffect: [''],
      jammingSpecificationFreq: [''],
      jammingSpecificationWavelength: [''],
      jammingSpecificationType: [''],
      jammingRemarks: [''],
      etiNoOfTourists: [''],
      etiTimefrom: [''],
      etiTimeto: [''],
      etiFrequencyDaily: [''],
      etiFrequencyWeekly: [''],
      etiFrequencySeasonal: [''],
      foSTimefrom: [''],
      foSTimeto: [''],
      foSSkirmishPurpose: [''],
      foSSkirmishPlaFmn: [''],
      foSSkirmishPlaNoOfPers: [''],
      foSSkirmishPlaNoOfOffrs: [''],
      foSSkirmishPlaNoOfJcos: [''],
      foSSkirmishPlaNoOfOr: [''],
      foSSkirmishPlaNoOfCiv: [''],
      foSSkirmishPlaNameOfOffrs: [''],
      foSCas: [''],
      foSDamageEqpt: [''],
      foSDamageProperty: [''],
      foSLossWpn: [''],
      foSLossAmn: [''],
      foSLossEqpt: [''],
      FoSCasFatal: [''],
      FoSCasNonFatal: [''],
      adzTimefrom: [''],
      adzTimeto: [''],
      adzNoOfPers: [''],
      adzActivity: [''],
      soCUnitType: [''],
      soCNoOfUnits: [''],
      soCOccupiedBy: [''],
      soCNoOfPlaPers: [''],
      soCNoOfCivs: [''],
      soCNoOfRbaPers: [''],
      soCNoOfPapfPers: [''],
      soCNoOfMilitia: [''],
      soCNoOfEqpt: [''],
      soCDescription: [''],
      gaNoOfGraziers: [''],
      gaNoOfAnimals: [''],
      gaNoOfDu: [''],
      gaGrazierDescription: [''],
      arAggressiveRecceNoOfPers: [''],
      arTypeOfPers: [''],
      arAggressiveRecceDescription: [''],
      daiNoOfDrones: [''],
      daiAltM: [''],
      daiTypeOfDrone: [''],
      daiFltPathLocA: [''],
      daiFltPathLocB: [''],
      daiFltPathLocC: [''],
      daiFltPathLocD: [''],
      daiDirnFrom: [''],
      daiDirnTo: [''],
      daiIncursionKms: [''],
      capNoOfAeProximity: [''],
      capTypeOfAeProximity: [''],
      capFltPathLocA: [''],
      capFltPathLocB: [''],
      capFltPathLocC: [''],
      capProximityDirnFrom: [''],
      capProximityDirnTo: [''],
      capIncursionKms: [''],
      capActivity: [''],
      flacNoOfAc: [''],
      flacAltM: [''],
      flacTypeOfAc: [''],
      flacFltPathLocA: [''],
      flacFltPathLocB: [''],
      flacFltPathLocC: [''],
      flacFltPathLocD: [''],
      flacAcDirnFrom: [''],
      flacAcDirnTo: [''],
      flacActivity: [''],
      avNoOfAePlatform: [''],
      avAltM: [''],
      avAirspaceViolationTypeOfAc: [''],
      avFltPathLocA: [''],
      avFltPathLocB: [''],
      avFltPathLocC: [''],
      avFltPathLocD: [''],
      avAirspaceViolationDirnFrom: [''],
      avAirspaceViolationDirnTo: [''],
      avActivity: [''],
      avIncursionKms: [''],
      esfpTypeOfPers: [''],
      esfpStr: [''],
      esfpIden: [''],
      esfpDisposition: [''],
      esfpDispositionRemarks: [''],
      rbuTypeOfPers: [''],
      rbuResBuildUpStr: [''],
      rbuResBuildUpRemarks: [''],
      cavConcOfVehsTypeOfVeh: [''],
      cavConcOfVehsStr: [''],
      cavConcOfVehsIden: [''],
      cavConcOfVehsDisposition: [''],
      cavConcOfVehsDispositionRemarks: [''],
      teTypeOfTrg: [''],
      teTrgExStr: [''],
      teTrgExIden: [''],
      teTrgExDisposition: [''],
      teTrgExDispositionRemarks: [''],
      avnTypeOfVeh: [''],
      avnStr: [''],
      avnIden: [''],
      avnDirnLocA: [''],
      avnDirnLocB: [''],
      avnDirnLocC: [''],
      avnVehsNovMode: [''],
      avnNomenclatureOfRd: [''],
      aglmTypeOfArty: [''],
      aglmTypeOfPlatform: [''],
      aglmStr: [''],
      aglmIden: [''],
      aglmDirnLocA: [''],
      aglmDirnLocB: [''],
      aglmDirnLocC: [''],
      aglmArtyGunsMode: [''],
      aglmNomenclatureOfRd: [''],
      aadTypeOfAmn: [''],
      aadArtyAmnDumpingNoAmnVehs: [''],
      aadRouteLocA: [''],
      aadRouteLocB: [''],
      aadRouteLocC: [''],
      aadArtyAmnDumpingMode: [''],
      aadNomenclatureOfRd: [''],
      ecmTypeOfEqpt: [''],
      ecmEngrColnNovStr: [''],
      ecmIden: [''],
      ecmEngrColnNovRouteLocA: [''],
      ecmEngrColnNovRouteLocB: [''],
      ecmEngrColnNovRouteLocC: [''],
      ecmEngrColnNovMode: [''],
      ecmNomenclatureOfRd: [''],
      cowBilleting: [''],
      cowStorage: [''],
      cowSplConstr: [''],
      bidBdrInfraDevpBilleting: [''],
      bidBdrInfraDevpStorage: [''],
      bidBdrInfraDevpSplConstr: [''],
      bidBdrInfraDevpComnInfra: [''],
      bidBdrInfraDevpRdsCl: [''],
      bidBdrInfraDevpRdsLength: [''],
      bidTypeRd: [''],
      bidBrSpan: [''],
      bidBrCl: [''],
      bidNosOfSettlements: [''],
      bidNoOfHouses: [''],
      diLocs: [''],
      diPdsOhp: [''],
      diPdsWoOhp: [''],
      diWpnPitsOhp: [''],
      diWpnPitsWoOhp: [''],
      diComnTrenchesCovered: [''],
      diComnTrenchesUncovered: [''],
      diConstrBy: [''],
      gaSsSamSiteLocs: [''],
      gaSsNoOfRamps: [''],
      adcmAmnDumpsType: [''],
      adcmAmnDumpsQty: [''],
      abAddlBilletingType: [''],
      abAddlBilletingQty: [''],
      cidTypeOfInfra: [''],
      cidTypeOfInfraDescription: [''],
      cidBdrInfraDevpQty: [''],
      cidFromLoc: [''],
      cidToLoc: [''],
      ctrcTypeOfComnInfra: [''],
      ctrcComnTowerQty: [''],
      ctrcComnTowerRemarks: [''],
      ldNoOfShelters: [''],
      ldModeOfDumping: [''],
      ldLgsDumpingTypeOfLgs: [''],
      ldNoOfVehFol: [''],
      ldNoOfVehSupplies: [''],
      ldNoOfVehAmn: [''],
      ldNoOfVehConstrMtrl: [''],
      ldNoOfTrainsFol: [''],
      ldNoOfTrainsSupplies: [''],
      ldNoOfTrainsAmn: [''],
      ldNoOfTrainsConstrMtrl: [''],
      bsdBrStoresDumpingNoOfVehs: [''],
      bsdBrStoresDumpingDescriptionStores: [''],
      esdEngrStoresDumpingNoOfVehs: [''],
      esdEngrStoresDumpingDescriptionStores: [''],
      ivsaIncrVehsInStgAsTypeOfVeh: [''],
      ivsaIncrVehsInStgAsStr: [''],
      ivsaIden: [''],
      ivsaIncrVehsInStgAsDispositionRemarks: [''],
      ilcIncrLgsCvysStr: [''],
      ilcIden: [''],
      ilcIncrLgsCvysRouteLocA: [''],
      ilcIncrLgsCvysRouteLocB: [''],
      ilcIncrLgsCvysRouteLocC: [''],
      ilcIncrLgsCvysMode: [''],
      ilcNomenclatureOfRd: [''],
      iltIncrLgsTrainsDateFrom: [''],
      iltIncrLgsTrainsDateTo: [''],
      iltNoOfTrainsRoutine: [''],
      iltNoOfTrainsEnhanced: [''],
      iltNoOfTrainsIncr: [''],
      iltRouteOrigin: [''],
      iltRouteDestination: [''],
      iltTypeOfLgs: [''],
      irtIncrRadioTfcDateFrom: [''],
      irtIncrRadioTfcDateTo: [''],
      irtTxnBand: [''],
      irtTypeOfTxn: [''],
      irtNoOfTxns: [''],
      teTypeOfForces: [''],
      teMobTrgExStr: [''],
      teMobTrgExIden: [''],
      teMobTrgExDisposition: [''],
      teMobTrgExEqptOnWheels: [''],
      teMobTrgExActivityTrg: [''],
      teActivityRoutine: [''],
      teHault: [''],
      rlfPermtLocName: [''],
      rlfNewLocName: [''],
      rlfReLocOfForcesDate: [''],
      rlfQuantumTps: [''],
      rlfQuantumAVehs: [''],
      rlfQuantumBVehs: [''],
      rlfQuantumCVehs: [''],
      rlfBilletingType: [''],
      rlfReLocOfForcesIden: [''],
      tmMobTrsoMovStr: [''],
      tmEnFmn: [''],
      tmEnUnit: [''],
      tmTrsoMovRouteLocA: [''],
      tmTrsoMovRouteLocB: [''],
      tmTrsoMovRouteLocC: [''],
      tmTrsoMovMode: [''],
      tmHaltLocA: [''],
      tmHaltLocB: [''],
      tmHaltLocC: [''],
      cidtoiRoadCl: [''],
      cidtoiRailBroadGauge: [''],
      cidtoiRailMetreGauge: [''],
      cidtoiRailRailwaySidings: [''],
      cidtoiRailDescription: [''],
      cidtoiAirLengthAitstrip: [''],
      cidtoiAirNoOfHangers: [''],
      cidtoiAirNoOfHAS: [''],
      cidtoiAirMiscShelters: [''],
      cidtoiBrSpan: [''],
      cidtoiBrWidth: [''],
      cidtoiBrCl: [''],
      cidtoiBrPermt: [''],
      cidtoiBrTemp: [''],
      frmn: [''],
  
      // new additions
      vLoc: [''],
      vLevel: [''],
      vFromTime: [''],
      vTotime: [''],
      vNoOfIndis: [''],
      bmmLoc: [''],
      bmmLevel: [''],
      bmmFromTime: [''],
      bmmToTime: [''],
      bmmNoOfIndis: [''],
      cLoc: [''],
      cLevel: [''],
      cFromTime: [''],
      cToTime: [''],
      cNoOfIndis: [''],
      aDate: [''],
      aWith: [''],
      aAgenda: [''],
      cDate: [''],
      cWith: [''],
      jvDate: [''],
      jvWith: [''],
      eadLoc: [''],
      eadDate: [''],
      eadTime: [''],
      eadOfCountry: [''],
      cdmLoc: [''],
      cdmDate: [''],
      cdmTime: [''],
      cdmOfCountry: [''],
      rdLoc: [''],
      rdDate: [''],
      rdTime: [''],
      rdFromCountry: [''],
      dapmLoc: [''],
      dapmDate: [''],
      dapmTime: [''],
      dapmTypeOfAgreement: [''],
      caLoc: [''],
      caNoOfLocs: [''],
      caDate: [''],
      caTime: [''],
      mdLoc: [''],
      mdDate: [''],
      mdTime: [''],
      mdTgtAgenda: [''],
      dmpLoc: [''],
      dmpDate: [''],
      dmpTime: [''],
      dmpType: [''],
      dmpLevel: [''],
      mrLoc: [''],
      mrDate: [''],
      mrTime: [''],
      mrType: [''],
      eidLoc: [''],
      eidDate: [''],
      eidTime: [''],
      eidType: [''],
      teLoc: [''],
      teDate: [''],
      teTime: [''],
      teOnWhom: [''],
      teType: [''],
      sLoc: [''],
      sDate: [''],
      sTime: [''],
      sByWhom: [''],
      sOnWhom: [''],
      sType: [''],
      esdLoc: [''],
      esdDate: [''],
      esdTime: [''],
      esdOnWhom: [''],
      tLoc: [''],
      tDate: [''],
      tTime: [''],
      tBywhom: [''],
      tToWhom: [''],
      tType: [''],
      octrLoc: [''],
      octrLocTo: [''],
      octrDate: [''],
      octrTime: [''],
      octrTimeTo: [''],
      puLoc: [''],
      puDate: [''],
      puTime: [''],
      puLevel: [''],
      ruiLoc: [''],
      ruiDate: [''],
      ruiTime: [''],
      ruiLevel: [''],
      fiSector: [''],
      fiDate: [''],
      fiTime: [''],
      hcLoc: [''],
      hcDate: [''],
      hcTime: [''],
      hcType: [''],
      hclLevel: [''],
      hcoLoc: [''],
      hcoDate: [''],
      hcoTime: [''],
      hcoTimeTo: [''],
      hcoTgt: [''],
      hcoLevel: [''],
      tcinLoc: [''],
      tcinDate: [''],
      tcinTime: [''],
      tcinTimeTo: [''],
      tcinTgt: [''],
      htsiLoc: [''],
      htsiNoOfIndis: [''],
      htsiPurpose: [''],
      idsLoc: [''],
      idsDate: [''],
      idsSection: [''],
      ipLoc: [''],
      ipDate: [''],
      ipType: [''],
      ipTypeEqpt_Nos: [''],
      ipTypeArms_Type: [''],
      ipTypeArms_Nos: [''],
      ipTypeAmn_Type: [''],
      ipTypeAmn_Nos: [''],
      ipTypeTech_Type: [''],
      ipTypeTech_Nos: [''],
      ipTypeWLS_Type: [''],
      ipTypeWLS_Nos: [''],
      etrLoc: [''],
      etrDate: [''],
      etrNosRect: [''],
      erLoc: [''],
      erDate: [''],
      erRect: [''],
      fcLoc: [''],
      fcDate: [''],
      fcNosRect: [''],
      ipcLoc: [''],
      ipcDate: [''],
      ipcTimeFrom: [''],
      ipcTimeTo: [''],
      ipcType: [''],
      ipcTypeCommercial_Nos: [''],
      ipcTypeWarship_Type: [''],
      ipcTypeWarship_Nos: [''],
      ipcTypeSvl_Type: [''],
      ipcTypeSvl_Nos: [''],
      maDate: [''],
      maWith: [''],
      maAgenda: [''],
      ieaLoc: [''],
      ieaDate: [''],
      ieaTime: [''],
      ieaTimeTo: [''],
      ieaTypeOfActivity: [''],
  
      bpmLoc: [''],
      bpmDate: [''],
      bpmBetween: [''],
      bpmTimeFrom: [''],
      bpmTimeTo: [''],
      bpmNpm: [''],
      bpmNpo: [''],
      biLoc: [''],
      biDate: [''],
      biBetween: [''],
      biTimeFrom: [''],
      biTimeTo: [''],
      biNpm: [''],
      biNpo: [''],
      cfvLoc: [''],
      cfvate: [''],
      cfvBetween: [''],
      cfvTimeFrom: [''],
      cfvTimeTo: ['']
  
    });
  }
  onChange2($event){

  }
  getSector(){
    this.apiService.getWithHeaders('MasterData/MasterSector').subscribe(res =>{
      if(res){
        this.sectordropdownItems = res;
      }
    })
  }

  getSource(){
    this.apiService.getWithHeaders('MasterData/MasterSource').subscribe(res => {
      if(res){
        this.sourcedropdownItems = res;
      }
    })
  }
  
  getEnLoc(){
    this.apiService.getWithHeaders('MasterData/MasterEnLoc').subscribe(res =>{
      if(res){
        this.enLocdropdownItems = res;
      }
    })
  }

  getSourceLoc(){
    this.apiService.getWithHeaders('MasterData/MasterLoc').subscribe(res =>{
      if(res){
        this.sourceLocdropdownItems = res;
      }
    })
  }

  getTypeOfLoc(){
    this.apiService.getWithHeaders('MasterData/TypeOfLoc').subscribe(res =>{
      if(res){
        this.typeOfLocdropdownItems = res;
      }
    })
  }

  onChange(event){

  }

  save(){

  }
  closedialog(){

  }

  getInputLevel(){
    this.apiService.getWithHeaders('MasterData/MasterInputLvl').subscribe(res =>{
      if(res){
        this.dropdownItems = res;
      }
    })
  }
  onFilterChange(value){       
    switch (value) {
      case '4 Corps':
        this.sectorList = ['Zimthang', 'Lungro La', 'Bum La','Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
        break;
        case '5 Mtn Div':
        this.sectorList = ['Zimthang', 'Lungro La', 'Bum La'];
        break;
        case '71 Mtn Div':
        this.sectorList = ['Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
        break;
        case '21 Mtn Div':
        this.sectorList = ['Zimthang', 'Lungro La', 'Bum La','Landa', 'Yangtse', 'Mago Chuna', 'Dominated Areas'];
        break;

      case '17 Mtn Div':
        this.sectorList = ['Semi Held', 'Chola', 'NatuLa', 'DokaLa'];
        break;
      case '27 Mtn Div':
        this.sectorList = ['MSS', 'PSS', 'NESS'];
        break;       
        case '3 Corps':
        this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley','Subansiri Valley', 'Siyom Valley', 'Siang Valley','Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        break;
      case '2 Mtn Div':
        this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley'];
        break;
      case '56 Mtn Div':
        this.sectorList = ['Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        break;
      case '57 Mtn Div':
        this.sectorList = ['Dibang Valley', 'Dou-delai valley', 'Lohit Valley', 'Subansiri Valley', 'Siyom Valley', 'Siang Valley'];
        break;           
        // case 'Option 3':
        //   this.childItems = ['Suboption X', 'Suboption Y', 'Suboption Z'];
        // break;
      default:
        this.sectorList = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
        break;
    }
    if (!value) {
      this.sectorList = ['MSS', 'PSS', 'Cho_La', 'Doka_La', 'NESS', 'Semi Held', 'NatuLa'];
    }     
}
}
