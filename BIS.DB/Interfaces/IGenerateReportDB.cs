﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;

namespace BIS.DB.Interfaces
{
    public interface IGenerateReportDB : IBaseDB<GenerateReport>
    {
        public List<GenerateReport> GetReportByUser(long corpsId, long divisionId, int userId);
        public GenerateReport GetById(int id, int corpsId, int divisionId);
    }
}
