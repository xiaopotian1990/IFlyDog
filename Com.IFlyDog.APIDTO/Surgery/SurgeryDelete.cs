﻿namespace Com.IFlyDog.APIDTO
{
    /// <summary>
    /// 手术预约删除
    /// </summary>
    public class SurgeryDelete
    {
        /// <summary>
        /// 预约记录
        /// </summary>
        public long ID { get; set; }
        /// <summary>
        /// 顾客ID
        /// </summary>
        public long CustomerID { get; set; }
        /// <summary>
        /// 操作人ID
        /// </summary>
        public long CreateUserID { get; set; }
    }
}
