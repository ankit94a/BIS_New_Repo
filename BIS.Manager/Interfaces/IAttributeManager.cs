﻿using BIS.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BIS.Manager.Interfaces
{
    public interface IAttributeManager
    {
        public List<Aspect> GetAllAspect();
    }
}
