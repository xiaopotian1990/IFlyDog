﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Com.IFlyDog.APIDTO
{
    /// <summary>
    /// 单位管理修改数据DTO
    /// </summary>
   public class SmartUnitUpdate
    {
        /// <summary>
        /// 操作人ID
        /// </summary>
        public long CreateUserID { get; set; }

        /// <summary>
        /// 单位管理id
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 单位管理名称
        /// </summary>
        public string Name { get; set; }
    }
}
