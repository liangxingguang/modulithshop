// +----------------------------------------------------------------------
// | ShopSuite商城系统 [ 赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | 版权所有 随商信息技术（上海）有限公司
// +----------------------------------------------------------------------
// | 未获商业授权前，不得将本软件用于商业用途。禁止整体或任何部分基础上以发展任何派生版本、
// | 修改版本或第三方版本用于重新分发。
// +----------------------------------------------------------------------
// | 官方网站: https://www.shopsuite.cn  https://www.modulithshop.cn
// +----------------------------------------------------------------------
// | 版权和免责声明:
// | 本公司对该软件产品拥有知识产权（包括但不限于商标权、专利权、著作权、商业秘密等）
// | 均受到相关法律法规的保护，任何个人、组织和单位不得在未经本团队书面授权的情况下对所授权
// | 软件框架产品本身申请相关的知识产权，禁止用于任何违法、侵害他人合法权益等恶意的行为，禁
// | 止用于任何违反我国法律法规的一切项目研发，任何个人、组织和单位用于项目研发而产生的任何
// | 意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其造成的损失 (包括但不限于直接、间接、
// | 附带或衍生的损失等)，本团队不承担任何法律责任，本软件框架只能用于公司和个人内部的
// | 法律所允许的合法合规的软件产品研发，详细见https://www.modulithshop.cn/policy
// +----------------------------------------------------------------------
package com.suisung.shopsuite.invoicing.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * <p>
 * 出入库单据item表
 * </p>
 *
 * @author Xinze
 * @since 2018-07-04
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("invoicing_stock_bill_item")
@ApiModel(value = "StockBillItem对象", description = "出入库单据item表")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class StockBillItem implements Serializable {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty("编号")
    @TableId(value = "stock_bill_item_id", type = IdType.AUTO)
    private Long stockBillItemId;

    @ApiModelProperty("源单号码")
    @TableField("order_id")
    private String orderId;

    @ApiModelProperty("订单商品表编号")
    @TableField("order_item_id")
    private Long orderItemId;

    @ApiModelProperty("订单编号")
    @TableField("stock_bill_id")
    private String stockBillId;

    @ApiModelProperty("产品编号")
    @TableField("product_id")
    private Long productId;

    @ApiModelProperty("商品名称")
    @TableField("product_name")
    private String productName;

    @ApiModelProperty("货品编号")
    @TableField("item_id")
    private Long itemId;

    @ApiModelProperty("商品名称")
    @TableField("item_name")
    private String itemName;

    @ApiModelProperty("商品数量")
    @TableField("bill_item_quantity")
    private Integer billItemQuantity;

    @ApiModelProperty("单价")
    @TableField("bill_item_unit_price")
    private BigDecimal billItemUnitPrice;

    @ApiModelProperty("小计")
    @TableField("bill_item_subtotal")
    private BigDecimal billItemSubtotal;

    @ApiModelProperty("单位编号")
    @TableField("unit_id")
    private Integer unitId;

    @ApiModelProperty("库存量")
    @TableField("warehouse_item_quantity")
    private Integer warehouseItemQuantity;

    @ApiModelProperty("店铺编号")
    @TableField("store_id")
    private Integer storeId;

    @ApiModelProperty("所属仓库")
    @TableField("warehouse_id")
    private Integer warehouseId;

    @ApiModelProperty("库存类型(ENUM)")
    @TableField("stock_transport_type_id")
    private Integer stockTransportTypeId;

    @ApiModelProperty("备注")
    @TableField("bill_item_remark")
    private String billItemRemark;

    @ApiModelProperty("业务类别(ENUM):2750-入库;2700-出库")
    @TableField("bill_type_id")
    private Integer billTypeId;

    @ApiModelProperty(value = "Spec名称")
    @TableField(exist = false)
    private String productItemName;
}