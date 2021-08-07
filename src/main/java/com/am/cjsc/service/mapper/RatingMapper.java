package com.am.cjsc.service.mapper;

import com.am.cjsc.domain.*;
import com.am.cjsc.service.dto.RatingDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Rating} and its DTO {@link RatingDTO}.
 */
@Mapper(componentModel = "spring", uses = { ProductMapper.class })
public interface RatingMapper extends EntityMapper<RatingDTO, Rating> {
    @Mapping(target = "product", source = "product", qualifiedByName = "name")
    RatingDTO toDto(Rating s);
}
