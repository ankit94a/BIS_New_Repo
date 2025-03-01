﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;

namespace BIS.Manager.Interfaces
{
    public interface IGenerateReportManager : IBaseManager<GenerateReport>
    {
        public List<GenerateReport> GetReportByUser(long corpsId, long divisionId, int userId);
    }
}
