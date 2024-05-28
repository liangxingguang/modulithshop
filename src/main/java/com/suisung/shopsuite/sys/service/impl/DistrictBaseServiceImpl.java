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
package com.suisung.shopsuite.sys.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.suisung.shopsuite.common.utils.CommonUtil;
import com.suisung.shopsuite.core.web.BaseQueryWrapper;
import com.suisung.shopsuite.core.web.service.impl.BaseServiceImpl;
import com.suisung.shopsuite.sys.model.entity.DistrictBase;
import com.suisung.shopsuite.sys.model.req.DistrictBaseListReq;
import com.suisung.shopsuite.sys.model.res.DistrictBaseRes;
import com.suisung.shopsuite.sys.repository.DistrictBaseRepository;
import com.suisung.shopsuite.sys.service.DistrictBaseService;
import org.springframework.beans.BeanUtils;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 地区表 服务实现类
 * </p>
 *
 * @author Xinze
 * @since 2021-05-20
 */
@Service
public class DistrictBaseServiceImpl extends BaseServiceImpl<DistrictBaseRepository, DistrictBase, DistrictBaseListReq> implements DistrictBaseService {
    /**
     * 地区树形
     *
     * @param districtBaseListReq
     * @return
     */
    @Cacheable(value = {"districtBaseTree"})
    @Override
    public List<DistrictBaseRes> getTree(DistrictBaseListReq districtBaseListReq) {
        districtBaseListReq.setSidx("district_sort");
        QueryWrapper<DistrictBase> queryWrapper = new BaseQueryWrapper<DistrictBase, DistrictBaseListReq>(districtBaseListReq).getWrapper();

        List<DistrictBase> districtBases = find(queryWrapper);

        List<DistrictBaseRes> categoryRes = districtBases.stream().map(data -> {
            DistrictBaseRes districtBaseRes = new DistrictBaseRes();
            BeanUtils.copyProperties(data, districtBaseRes);
            return districtBaseRes;
        }).collect(Collectors.toList());

        return CommonUtil.toTreeData(categoryRes, 0,
                DistrictBaseRes::getDistrictParentId,
                DistrictBaseRes::getDistrictId,
                DistrictBaseRes::setChildren
        );
    }

    @CacheEvict(value = {"districtBaseTree"}, allEntries = true)
    @Override
    public boolean add(DistrictBase a) {
        return super.add(a);
    }

    @CacheEvict(value = {"districtBaseTree"}, allEntries = true)
    @Override
    public boolean edit(DistrictBase a) {
        return super.edit(a);
    }

    @CacheEvict(value = {"districtBaseTree"}, allEntries = true)
    @Override
    public boolean remove(Serializable a) {
        return super.remove(a);
    }
}
