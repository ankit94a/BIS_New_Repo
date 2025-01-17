using BIS.Common.Entities;
using BIS.Manager.Interfaces;
using InSync.Api.Helpers;
using Microsoft.AspNetCore.Mvc;
using static BIS.Common.Enum.Enum;

namespace BIS.API.Controller
{
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardManager _dashboardManager;
        public DashboardController(IDashboardManager dashboardManager)
        { 
            _dashboardManager = dashboardManager;
        }

        [HttpPost]
        public IActionResult GetFmnWiseData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.GetAllFmnOrAspectData(corpsId,divisionId,roleType,filterModel));
        }

        [HttpPost,Route("fmn30days")]
        public IActionResult Get30DaysFmnData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.Get30DaysFmnOrAspectData(corpsId, divisionId, roleType, filterModel));
        }
        [HttpPost, Route("today")]
        public IActionResult GetTodaysFmnData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.GetTodayFmnOrAspectData(corpsId, divisionId, roleType, filterModel));
        }
        [HttpPost,Route("fmnLast12Months")]
        public IActionResult Get12MonthsFmnData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.Get12MonthsFmnOrAspectData(corpsId, divisionId, roleType, filterModel));
        }

        // Aspect Api Endpoint
        [HttpPost,Route("allaspect")]
        public IActionResult GetAspectWiseData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.GetAllFmnOrAspectData(corpsId, divisionId, roleType, filterModel, false));
        }

        [HttpPost, Route("aspect30days")]
        public IActionResult Get30DaysAspectData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.Get30DaysFmnOrAspectData(corpsId, divisionId, roleType, filterModel,false));
        }
        [HttpPost, Route("aspecttoday")]
        public IActionResult GetTodayAspectData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.GetTodayFmnOrAspectData(corpsId, divisionId, roleType, filterModel,false));
        }

        [HttpPost, Route("aspectLast12Months")]
        public IActionResult Get12MonthsAspectData([FromBody] FilterModel filterModel)
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.Get12MonthsFmnOrAspectData(corpsId, divisionId, roleType, filterModel,false));
        }

    }
}
