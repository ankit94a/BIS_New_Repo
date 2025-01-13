using BIS.Common.Entities;
using BIS.Manager.Interfaces;
using InSync.Api.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BIS.API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterDataController : ControllerBase
    {
        private readonly IMasterDataManager _masterDataManager;
         public MasterDataController(IMasterDataManager masterDataManager)
        {
            _masterDataManager = masterDataManager;
        }   

        [HttpGet]
        public IActionResult GetAll()
        {
            long CorpsId = HttpContext.GetCorpsId();
            long DivisonId = HttpContext.GetDivisionId();
            return Ok(_masterDataManager.GetAll(CorpsId,DivisonId));
        }
        [HttpGet,Route("getall")]
        public IActionResult GetAllMasterData()
        {
            return Ok(_masterDataManager.GetAllMasterData());
        }
        [HttpPost]
        public IActionResult AddData(MasterData masterData)
        {
            long CorpsId = HttpContext.GetCorpsId();
            long DivisonId = HttpContext.GetDivisionId();
            return Ok(_masterDataManager.Add(masterData));
        }
    }
}
