﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Com.IFlyDog.APIDTO
{
    /// <summary>
    /// 导入结果集
    /// </summary>
   public class CustomerFilterAdd
    {

        /// <summary>
        /// 结果集id
        /// </summary>
        public long ID { get; set; }

        /// <summary>
        /// 结果集名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 创建用户
        /// </summary>
        public long CreateUserID { get; set; }
        /// <summary>
        /// 医院id
        /// </summary>
        public long HospitalID { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
    }


}
