using BIS.Manager.Interfaces;
using InSync.Api.Helpers;
using Microsoft.AspNetCore.Mvc;
using static BIS.Common.Enum.Enum;

namespace BIS.API.Controller
{
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardManager _dashboardManager;
        public DashboardController(IDashboardManager dashboardManager)
        { 
            _dashboardManager = dashboardManager;
        }

        [HttpGet]
        public IActionResult GetFmnWiseData()
        {
            long corpsId = HttpContext.GetCorpsId();
            long divisionId = HttpContext.GetDivisionId();
            RoleType roleType = HttpContext.GetRoleType();
            return Ok(_dashboardManager.GetFmnWiseData(corpsId,divisionId,roleType));
        }
    }
}
