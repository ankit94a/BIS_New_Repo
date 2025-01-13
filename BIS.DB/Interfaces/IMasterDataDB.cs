﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;

namespace BIS.DB.Interfaces
{
    public interface IMasterDataDB : IBaseDB<MasterData>
    {
        public List<MasterData> GetAllMasterData();
    }
}
