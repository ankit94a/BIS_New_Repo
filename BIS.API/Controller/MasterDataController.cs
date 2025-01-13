using BIS.Common.Entities;
using BIS.DB.Implements;
using BIS.Manager.Interfaces;
using InSync.Api.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static BIS.Common.Enum.Enum;

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

        //[HttpGet]
        //public IActionResult GetAll()
        //{
            
        //    int CorpsId = HttpContext.GetCorpsId();
        //    int DivisonId = HttpContext.GetDivisionId();
        //    return Ok(_masterDataManager.GetAll(CorpsId,DivisonId));
        //}
        [HttpGet]
        public IActionResult GetAllMasterData()
        {
            RoleType roleType = HttpContext.GetRoleType();
            int CorpsId = HttpContext.GetCorpsId();
            int DivisonId = HttpContext.GetDivisionId();
            return Ok(_masterDataManager.GetAllMasterData(CorpsId,roleType, DivisonId));
        }
        [HttpPost]
        public IActionResult AddData(MasterData masterData)
        {
            int CorpsId = HttpContext.GetCorpsId();
            int DivisonId = HttpContext.GetDivisionId();
            int userId = HttpContext.GetUserId();
            masterData.CreatedBy = userId;
            return Ok(_masterDataManager.Add(masterData));
        }
    }
}
