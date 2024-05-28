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
package com.suisung.shopsuite.pay.model.req;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.suisung.shopsuite.core.web.model.req.BaseListReq;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 用户资源表-资金账户表
 * </p>
 *
 * @author Xinze
 * @since 2021-05-06
 */
@Data
@EqualsAndHashCode(callSuper = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@ApiModel(description = "用户资源表-资金账户表分页查询")
public class UserResourceListReq extends BaseListReq {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("货币编号")
    private Integer currencyId;

    @ApiModelProperty("左符号")
    private String currencySymbolLeft;

    @ApiModelProperty("用户资金")
    private BigDecimal userMoney;

    @ApiModelProperty("冻结资金:待结算余额")
    private BigDecimal userMoneyFrozen;

    @ApiModelProperty("充值卡余额")
    private BigDecimal userRechargeCard;

    @ApiModelProperty("冻结充值卡:待结算")
    private BigDecimal userRechargeCardFrozen;

    @ApiModelProperty("积分")
    private BigDecimal userPoints;

    @ApiModelProperty("冻结积分")
    private BigDecimal userPointsFrozen;

    @ApiModelProperty("可用信用")
    private BigDecimal userCredit;

    @ApiModelProperty("冻结额度")
    private BigDecimal userCreditFrozen;

    @ApiModelProperty("使用信用")
    private BigDecimal userCreditUsed;

    @ApiModelProperty("信用额度")
    private BigDecimal userCreditTotal;

    @ApiModelProperty("保证金")
    private BigDecimal userMargin;

    @ApiModelProperty("红包额度")
    private BigDecimal userRedpack;

    @ApiModelProperty("红包冻结额度")
    private BigDecimal userRedpackFrozen;

    @ApiModelProperty("用户昵称")
    private String userNickname;

    private List<Integer> userIds;

}
