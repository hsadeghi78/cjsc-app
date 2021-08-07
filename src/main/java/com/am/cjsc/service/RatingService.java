package com.am.cjsc.service;

import com.am.cjsc.service.dto.RatingDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.am.cjsc.domain.Rating}.
 */
public interface RatingService {
    /**
     * Save a rating.
     *
     * @param ratingDTO the entity to save.
     * @return the persisted entity.
     */
    RatingDTO save(RatingDTO ratingDTO);

    /**
     * Partially updates a rating.
     *
     * @param ratingDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<RatingDTO> partialUpdate(RatingDTO ratingDTO);

    /**
     * Get all the ratings.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<RatingDTO> findAll(Pageable pageable);

    /**
     * Get the "id" rating.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<RatingDTO> findOne(Long id);

    /**
     * Delete the "id" rating.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
