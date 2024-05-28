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
package com.suisung.shopsuite.pt.controller.manage;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.suisung.shopsuite.core.consts.Constants;
import com.suisung.shopsuite.core.web.CommonRes;
import com.suisung.shopsuite.core.web.controller.BaseController;
import com.suisung.shopsuite.core.web.model.BaseOrder;
import com.suisung.shopsuite.core.web.model.res.BaseListRes;
import com.suisung.shopsuite.pt.model.entity.ProductSpec;
import com.suisung.shopsuite.pt.model.req.ProductSpecAddReq;
import com.suisung.shopsuite.pt.model.req.ProductSpecEditReq;
import com.suisung.shopsuite.pt.model.req.ProductSpecListReq;
import com.suisung.shopsuite.pt.model.res.ProductSpecRes;
import com.suisung.shopsuite.pt.service.ProductSpecService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 商品规格表 前端控制器
 * </p>
 *
 * @author Xinze
 * @since 2021-05-06
 */
@Api(tags = "商品规格表")
@RestController
@RequestMapping("/manage/pt/productSpec")
public class ProductSpecController extends BaseController {
    @Autowired
    private ProductSpecService productSpecService;

    @PreAuthorize("hasAuthority('/manage/pt/productSpec/list')")
    @ApiOperation(value = "商品规格表-分页列表查询", notes = "商品规格表-分页列表查询")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public CommonRes<BaseListRes<ProductSpec>> list(ProductSpecListReq productSpecListReq) {
        //额外排序
        BaseOrder baseOrder = new BaseOrder();
        baseOrder.setSidx("spec_id");
        baseOrder.setSort(Constants.ORDER_BY_ASC);

        List<BaseOrder> order = new ArrayList<>();
        order.add(baseOrder);

        productSpecListReq.setOrder(order);
        IPage<ProductSpec> pageList = productSpecService.lists(productSpecListReq);

        return success(pageList);
    }

    @ApiOperation(value = "商品规格表-递归查询", notes = "商品规格表-递归查询")
    @RequestMapping(value = "/tree", method = RequestMethod.GET)
    public CommonRes<List<ProductSpecRes>> tree() {
        List<ProductSpecRes> specList = productSpecService.getTree();

        return success(specList);
    }

    @PreAuthorize("hasAuthority('/manage/pt/productSpec/add')")
    @ApiOperation(value = "商品规格表-添加", notes = "商品规格表-添加")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public CommonRes<?> add(ProductSpecAddReq productSpecAddReq) {
        ProductSpec productSpec = BeanUtil.copyProperties(productSpecAddReq, ProductSpec.class);
        boolean success = productSpecService.add(productSpec);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/pt/productSpec/edit')")
    @ApiOperation(value = "商品规格表-编辑", notes = "商品规格表-编辑")
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public CommonRes<?> edit(ProductSpecEditReq productSpecEditReq) {
        ProductSpec productSpec = BeanUtil.copyProperties(productSpecEditReq, ProductSpec.class);
        boolean success = productSpecService.edit(productSpec);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/pt/productSpec/remove')")
    @ApiOperation(value = "商品规格表-通过spec_id删除", notes = "商品规格表-通过spec_id删除")
    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public CommonRes<?> remove(@RequestParam("spec_id") Integer specId) {
        boolean success = productSpecService.remove(specId);

        if (success) {
            return success();
        }

        return fail();
    }
}

