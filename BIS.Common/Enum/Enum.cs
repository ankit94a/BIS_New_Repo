using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Newtonsoft.Json.Converters;

namespace BIS.Common.Enum
{
    public class Enum
    {
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PermissionItem
        {
            Dashboard = 1,
            MasterData,
            AddMasterData,
            SearchAndQuery,
            GenerateReport,
            SmartAnalysis,
            PredictiveModel,
            CdrDashboard,
            ImportExport,
            SavedNotes,
            NotesForMe,
            Facility,
            User,
            Role,
            PermissionVerification,
            Attribute
        }
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PermissionAction
        {
            Read = 1,
            Create,
            Update,
            ReadAll,
            Delete
        }
        [JsonConverter(typeof(StringEnumConverter))]
        public enum RoleType
        {
            Staff1 = 1,
            Staff2,
            G1Int,
            Colgs,
            ColInt,
            Bgs,
            Mggs,
            Goc,
            Admin,
            SuperAdmin
        }
    }
}
