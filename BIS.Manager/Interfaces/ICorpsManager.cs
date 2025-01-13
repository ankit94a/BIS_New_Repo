﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;

namespace BIS.Manager.Interfaces
{
    public interface ICorpsManager
    {
        public List<Corps> GetAll();
        public List<Divisons> GetDivisonByCorps(long corpsId);
    }
}
