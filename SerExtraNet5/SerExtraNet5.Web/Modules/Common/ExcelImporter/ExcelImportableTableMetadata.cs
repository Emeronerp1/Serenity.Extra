﻿using System.Collections.Generic;
using Serenity.ComponentModel;

namespace SerExtraNet5.Common
{
    [ScriptInclude]
    public class ExcelImportableTable
    {
        public string TableName { get; set; }
        public string RowType { get; set; }
        public List<PropertyItem> ImportableFields { get; set; }
    }
}