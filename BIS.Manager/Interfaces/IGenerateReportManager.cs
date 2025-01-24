﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Interfaces
{
    public interface IGenerateReportManager : IBaseManager<GenerateReport>
    {
        public List<GenerateReport> GetReportByUser(long corpsId, long divisionId, int userId);
        public long AddReport(GenerateReport generateReport, RoleType roleType);
        public GenerateReport GetById(int id,int corpsId,int divisionId);
    }
}
