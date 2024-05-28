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
package com.suisung.shopsuite.shop.model.entity;

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
 * 店铺统计表
 * </p>
 *
 * @author Xinze
 * @since 2018-07-04
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("shop_store_analytics")
@ApiModel(value = "StoreAnalytics对象", description = "店铺统计表")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class StoreAnalytics implements Serializable {
    private static final long serialVersionUID = 1L;

    @ApiModelProperty("店铺编号")
    @TableId(value = "store_id", type = IdType.AUTO)
    private Integer storeId;

    @ApiModelProperty("店铺访问量")
    @TableField("store_click_num")
    private Integer storeClickNum;

    @ApiModelProperty("收藏数量")
    @TableField("store_favorite_num")
    private Integer storeFavoriteNum;

    @ApiModelProperty("最新商品")
    @TableField("store_product_new_num")
    private Integer storeProductNewNum;

    @ApiModelProperty("产品数量")
    @TableField("store_product_num")
    private Integer storeProductNum;

    @ApiModelProperty("在售数量")
    @TableField("store_product_normal_num")
    private Integer storeProductNormalNum;

    @ApiModelProperty("店铺销量")
    @TableField("store_sales_num")
    private Integer storeSalesNum;

    @ApiModelProperty("评价次数")
    @TableField("store_evaluation_num")
    private Integer storeEvaluationNum;

    @ApiModelProperty("好评率:store_servicecredit/store_evaluation_num/5,使用综合选项服务评价")
    @TableField("store_evaluation_rate")
    private BigDecimal storeEvaluationRate;

    @ApiModelProperty("描述相符")
    @TableField("store_desccredit")
    private BigDecimal storeDesccredit;

    @ApiModelProperty("服务评价")
    @TableField("store_servicecredit")
    private BigDecimal storeServicecredit;

    @ApiModelProperty("物流评价")
    @TableField("store_deliverycredit")
    private BigDecimal storeDeliverycredit;

    @ApiModelProperty("店铺成交总营业额:确认收货")
    @TableField("store_trade_amount")
    private BigDecimal storeTradeAmount;
}
