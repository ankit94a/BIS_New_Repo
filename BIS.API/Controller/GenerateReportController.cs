﻿using BIS.Common.Entities;
using BIS.Manager.Interfaces;
using InSync.Api.Helpers;
using Microsoft.AspNetCore.Mvc;
using static BIS.Common.Enum.Enum;

namespace BIS.API.Controller
{
    [Route("api/[controller]")]
    public class GenerateReportController : ControllerBase
    {
        private readonly IGenerateReportManager _generateReportManager;
        public GenerateReportController(IGenerateReportManager generateReportManager)
        {
            _generateReportManager = generateReportManager;
        }
        [HttpPost]
        public IActionResult AddReport(GenerateReport report)
        {
            long CorpsId = HttpContext.GetCorpsId();
            long DivisonId = HttpContext.GetDivisionId();
            int userId = HttpContext.GetUserId();
            report.CreatedBy = userId;
            return Ok(_generateReportManager.Add(report));
        }
        [HttpGet]
        public IActionResult GetReport()
        {
            long CorpsId = HttpContext.GetCorpsId();
            long DivisonId = HttpContext.GetDivisionId();
            int userId = HttpContext.GetUserId();
            return Ok(_generateReportManager.GetReportByUser(CorpsId, DivisonId, userId));
        }
    }
}