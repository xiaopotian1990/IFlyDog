﻿namespace Com.IFlyDog.APIDTO
{
    /// <summary>
    /// 修改关系管理
    /// </summary>
    public class RelationUpdate
    {
        /// <summary>
        /// 主键
        /// </summary>
        public string ID { get; set; }
        /// <summary>
        /// 关系名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// 操作人ID
        /// </summary>
        public long CreateUserID { get; set; }
    }
}
